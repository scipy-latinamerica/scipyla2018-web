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

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="{SHORT DESCRIPTION CHANGE ME} - SciPyLA 2018 - The scientific Python conference in Latin America">
    <meta name="author" content="The SciPyLA community">
    <link rel="icon" href="../favicon.ico">

    <title>SciPyLA 2018 - {SHORT DESCRIPTION CHANGE ME}</title>

    <!-- Bootstrap core CSS -->
    <link href="../assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- SciPyLA Bootstrap theme -->
    <link href="../assets/css/theme.css" rel="stylesheet">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="../assets/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../assets/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../assets/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../assets/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../assets/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../assets/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../assets/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../assets/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="../assets/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../assets/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/icons/favicon-16x16.png">
    <link rel="manifest" href="../assets/icons/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Icons -->
    <link href="../assets/css/fonts.css" rel="stylesheet">
    <link href="../assets/css/Roboto+Condensed+Yanone+Kaffeesatz.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../assets/css/custom.css" rel="stylesheet">
    <link href="../assets/css/faces.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link href="../assets/css/flag-icon.min.css" rel="stylesheet" />

    <script language="javascript">
      window.route = { section: 'community', page: 'organizers' }
    </script>


    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','../assets/js/analytics.js','ga');

      ga('create', 'UA-80867706-1', 'auto');
      ga('send', 'pageview');

    </script>
  </head>

  <body>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse text-uppercase" ng-app="scipyla.mainnav" ng-controller="MainNavCtl">
      <ng-include src="'../assets/views/menu_ppal.html'"></ng-include>
    </nav>

    <div class="container" ng-app="scipyla.md" id="container">

      <div class="row">
        <div class="col-xs-12">
          <div markdown-it ng-include="'/docs/pt/{NAME AND PATH OF THE FILE-EXAMPLE->contact.pt.md}'" class="md">
          </div>
        </div>
      </div>

    </div> <!-- /container -->

    <footer id="footer" class="footer text-center">
      <div class="container">
        <div class="btn-group btn-group-lg">
          <a href="https://facebook.com/scipyla" type="button" class="btn btn-primary btn-social btn-round">
            <span class="icon-6"></span>
          </a>
          <a href="http://twitter.com/scipyla" type="button" class="btn btn-primary btn-social btn-round">
            <span class="icon-7"></span>
          </a>
          <a href="https://plus.google.com/116952396338000992599" type="button" class="btn btn-primary btn-social btn-round">
            <span class="icon-8"></span>
          </a>
          <a href="https://ar.linkedin.com/grps/SciPy-Latin-America-8344796/about" type="button" class="btn btn-primary btn-social btn-round">
            <span class="icon-9"></span>
          </a>  
        </div>
        <p>Copyright 2017 &copy; <a href="http://scipyla.org">SciPy Latinamerica</a></p>
      </div>
    </footer>


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="../assets/js/jquery.min.js"></script>
    <script src="../dist/js/bootstrap.min.js"></script>
    <script src="../assets/js/angular.min.js"></script>
    <script src="../assets/js/angular-route.min.js"></script>
    <script src="../assets/js/angular-sanitize.min.js"></script>
    <script src="../assets/js/markdown-it.min.js"></script>
    <script src="../assets/js/ng-markdownit.min.js"></script>
    <script src="../assets/js/md.js"></script>
    <script src="../assets/js/mainnav.js"></script>
    <script language="javascript">
      angular.bootstrap(document.getElementById('container'), ['scipyla.md'])
    </script>
  </body>
</html>
```

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
