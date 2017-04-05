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

##### 3. on bottom of <body> tag have to add content from ./dist/widget.txt or include script ./dist/widget.js
```
 <script type="text/javascript" src="widget.js"></script>
```




#### widget w DEV składa sie z plików widget.js oraz style.less.
#### w DEV jeśli chcemy coś zmienić to odpalamy komendę "gulp watch" "i zmieniamy
#### w przeglądarce po odpaleniu index.html możemy na bieżąco śledzić zmiany

***

#### do PROD składa się go komendą "npm run build" i 2 wersje znajdują się w ./dist
#### załączamy widget.js z ./dist na sam dół BODY