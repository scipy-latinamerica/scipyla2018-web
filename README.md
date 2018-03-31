# scipyla2018-web

## Current site
You can visit site [here](http://conf.scipyla.org/)



## Welcome
[![Join the chat at https://gitter.im/scipyla2018/Lobby](https://badges.gitter.im/scipyla2018/Lobby.svg)](https://gitter.im/scipyla2018/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository is used to keep the SciPy Latin America 2018 Conference website source code.

The conference organization, documents, issues, etc.. will be kept at [scipyla2018 repository](https://github.com/scipy-latinamerica/scipyla2018)

Feel free to use this project as a starting point for the organization of future conferences.



## Tasks

Handled as issues in the [scipyla2018 repository](https://github.com/scipy-latinamerica/scipyla2018).



## Contributing

### Starting
To contribute with the website you might fork this repository, clone into your machine, or edit and create pages on github itself. Then do a pull request.

#### How to:
* [Fork a repository](https://help.github.com/articles/fork-a-repo/)
* [Synce a Fork](https://help.github.com/articles/syncing-a-fork/)
* [Check out Pull Requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)
* [GitHub Standard Fork & Pull Request Workflow ](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

The pages are in the language dir inside docs, for example, the portuguese version are inside docs/pt.

### Running the site app

1. Run the application as a server
   1. Running as [`http://localhost:12007/`](http://localhost:12007/)
      1. Python 2.7+
         ```shell
         $ python -m SimpleHTTPServer 12007
         ```
      1. Python3
         ```shell
         $ python -m http.server 12007
         ```
      1. Open your browser(Chrome, Chromium, Firefox, Internet Explorer1) and access the url [`http://localhost:12007/`](http://localhost:12007/)
   1. Running as [`http://localhost:12007/scipyla2018-web/`](http://localhost:12007/scipyla2018-web/)
      1. Move to the parent directory
         
         **Ex:**
            If you are in the path `~/home/myuser/workspace/scipyla2018-web/`, go to the `~/home/myuser/workspace/` and continue
      1. Python 2.7+
         ```shell
         $ python -m SimpleHTTPServer 12007
         ```
      1. Python3
         ```shell
         $ python -m http.server 12007
         ```
      1. Open your browser(Chrome, Chromium, Firefox, Internet Explorer1) and access the url [`http://localhost:12007/scipyla2018-web/`](http://localhost:12007/scipyla2018-web/)


**How to know which Python version I'm using?**

Running:
 ```shell
 $ python -V
 ```
The output may look something like this: 
 * `Python 2.7.14`
 * `Python 3.6.3` 


### Creating a New Page
To create a new page follow these steps (after fork and clone):

* Create a new file inside `docs/pt` with the .md extension.
* Create a directory with an `index.html` file, this file is used to include the following markdown content file.
* Edit the file, `assets/js/mainnav.js`, look at the definition of mainnav_data.
* Create a new item for the page. If it is a new top level menu, create a new caption. Look at the following example
* After all **create a pull request**

#### Template for the index.html file

The template must be placed inside the desired directory, for example: contact/index.html

There are 3 places to change, look at {UPPERCASE} sentences on the template:

* meta description content
* title
* markdown ng-include

[HTML page example](/example/index.html)

#### Add the page to the menu.

Edit the file, `assets/js/mainnav.js`, look at the definition of mainnav_data.

```javascript
  var mainnav_data = [ 
    { caption: { pt: 'Início', es: 'Inicio', en: 'Home'},
      id: 'home', 
      items: [
        { href: 'help',
          id: 'help',
          caption: { pt: 'Colabore', es: 'Colaborar', en : 'Help' }},
        { href: 'faq',
          id: 'faq',
          caption: { pt: 'FAQ', es: 'FAQ', en : 'FAQ' }}
      ]
    }
  ]
```

Lets say we want a contact menu top level menu and a link to a contact page. So let's create a new caption and an item for the contact.md page:

```javascript
  var mainnav_data = [ 
    { caption: { pt: 'Início', es: 'Inicio', en: 'Home'},
      id: 'home', 
      items: [
        { href: 'help',
          id: 'help',
          caption: { pt: 'Colabore', es: 'Colaborar', en : 'Help' }},
        { href: 'faq',
          id: 'faq',
          caption: { pt: 'FAQ', es: 'FAQ', en : 'FAQ' }}
      ]
    },
    { caption: { pt: 'Contato', es: 'Contacto', en: 'Contact'},
      id: 'contact', 
      items: [
        { href: 'contact',
          id: 'contact',
          caption: { pt: 'Entre em contato', es: 'Contáctenos', en : 'Contact us' }}
      ]
    }
  ]
```

#### Editing CSS
If a CSS modification is needed please follow the CSS BEM Style
* [Introduction](http://getbem.com/introduction/)
* [Naming](http://getbem.com/naming/)


## Communication Channels

If you need any help, please look for us at the Communication Channels.

* [GitHub to store files and track issues](https://github.com/scipy-latinamerica/scipyla2018);
* [Mailing list to make announcements](https://groups.google.com/forum/#!forum/scipyla);
* [TODO: Mailing list to discuss event-related subjects](https://groups.google.com/forum/#!forum/scipyla2017);
* [Twitter](https://twitter.com/scipyla);
* [Linkedin](https://www.linkedin.com/grp/home?gid=8344796);
* [TODO: Facebook](https://www.facebook.com/scipyla/);
* [TODO: Website](http://conf.scipyla.org);
