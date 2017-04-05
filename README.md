# widget for FS, to fsnews portal

#### how to run:
##### in <head> tag have to add to meta tags:

```
	<meta name="person_id" content="842" />
	<meta name="company_tag" content="ABF" />
```

#### widget w DEV składa sie z plików widget.js oraz style.less.
#### w DEV jeśli chcemy coś zmienić to odpalamy komendę "gulp watch" "i zmieniamy
#### w przeglądarce po odpaleniu index.html możemy na bieżąco śledzić zmiany

***

#### do PROD składa się go komendą "npm run build" i 2 wersje znajdują się w ./dist
#### załączamy widget.js z ./dist na sam dół BODY