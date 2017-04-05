# widget for FS, to fsnews portal

### how to add widget correctly:
##### 1. in <head> tag have to add to meta tags:
```
<meta name="person_id" content="842" />
<meta name="company_tag" content="ABF" />
```

##### 2. in <head> tag have to add jquery
```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

##### 3. on bottom of <body> tag have to add content from "./dist/widget.txt" or include script from "./dist/widget.js"
```
 <script type="text/javascript" src="widget.js"></script>
```


### how to modify widget:
##### 1. there are style.less and widget.js in "./". this two files is widget in DEV mode.
##### 2. on start working run "gulp watch" and run index.html in browser
##### 3. on end working run "npm run build". packed widget is in "./dist"

 