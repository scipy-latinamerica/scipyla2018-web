import csv
import json

result = {'activities': [], 'speakers': []}

with open('atividades.csv') as atividades:
    reader = csv.DictReader(atividades)
    rows = []
    for row in reader:
        rows.append(row)

# row_keys
# (['title', 'email', 'bio', 'avatar', 'url', 'organization', 'additional_info', 'notes', 'talk_format', 'twitter', 'abstract', 'status', 'created_at', 'state', 'shirt_size', 'confirmed', 'location', 'tags', 'description', 'name', 'audience_level', 'rating'])

for row in rows:
    result['activities'].append(row)

    speakers_name = [speaker['name'] for speaker in result['speakers']]
    if row['name'] not in speakers_name:
        result['speakers'].append({
        'avatar': row['avatar'],
        'bio': row['bio'],
        'country': row['location'],
        'organization': row['organization'],
        'name': row['name'],
        'id': row['avatar'].split('/')[-1].split('?')[0]
        })

with open('assets/translations/submissions/pt.json', 'w') as output:
    json.dump(result, output)

with open('assets/translations/submissions/es.json', 'w') as output:
    json.dump(result, output)
