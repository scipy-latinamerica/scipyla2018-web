# Copied from: https://github.com/grupy-sanca/caipyra2018/blob/master/report/matplota.py

import matplotlib.pyplot as plt
import matplotlib.lines  as lines
import numpy as np

custos = {'Graphics' : 2969.85,
          'Keynotes' : 2465.75,
          'Financial Aid' : 1569.37,
          'Coffee break' : 6375}

# custos em 2018
with plt.xkcd():
    print("custos.png")
    fig, ax = plt.subplots(figsize=(6, 3), subplot_kw=dict(aspect="equal"))

    ax.pie(custos.values(), labels = custos.keys(), autopct ='%1.1f%%')

    linhazinha = lines.Line2D([0], [0])
    ax.legend([linhazinha], ["total: ~ 13k BRL"],
              handlelength = 0, handletextpad = 0,
              fontsize = 'large', fancybox=True,
              loc="upper right",
              bbox_to_anchor=(0, 0, 0, 1)
              )

    plt.title("Costs of SciPyLA 2018")
    plt.tight_layout()
    plt.savefig("assets/img/custos.png",
                dpi = 150,
                transparent = True)
