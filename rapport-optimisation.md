# Rapport d'optimisation du projet ScrollyTelling


[Rapport du 12 mai 2024, 4:30:04](https://pagespeed.web.dev/analysis/https-erick-tim-momo-com/4s834zpv03?form_factor=desktop)

## Problème 1

### Le plus grand élément Contentful Paint

Le site a détecté une image qui est beaucoup tros grosse, et qui dépasse 1920 par 1080. Cela cause un délai de 4 190 ms

### Action concrète

Une image qui sert de background à l'écran titre est extrêmement large donc je vais la réduire pour qu'elle soit en 1920 par 1080

### Résultat
L'image a été compressé mais l'image prend encore un petit peu trop de temps à charger, c'est-à-dire 1,9s. Mais cela est mieux que 4,2s.

## Problème 2

### Une balise viewport semble ne pas marcher

Le site ne détecte pas cette balise

### Action concrète

Je vais aller chercher en ligne la balise pour ne pas faire de fautes et la remplacer

### Résultat

Malheureusement cela n'a rien changé, car c'était bien écrit avant ce test. Je pense que le site a un problème car il ne détecte pas cette balise qui était présente et parfaitement écrite

## Problème 3

### Une police cause un délai de 240 ms

La police Overlock cause un ralentissement du site web

### Action concrète

Je vais mettre la police Overlock en commentaire pour régler ce problème

### Résultat
En enlevant cette police le problème est parti


## Rapport projet ScrollyTelling après optimisation
[Rapport du 12 mai 2024, 6:01:41](https://pagespeed.web.dev/analysis/https-erick-tim-momo-com/j3b3u2j9sq?form_factor=desktop)
