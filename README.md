# Nástroj na měření odezvy EET serverů
*Jeednoduchý nástroj, naprogramovaný v Node.js pro měření odezvy serverů EET, naprogramovaný ve fastfoodu během oběda, když všechny restaurace v okolí stávkovaly kvůli EET *

## Použití ##

Nejjednodušším způsobem spuštštění je Docker:
https://hub.docker.com/r/konupek/eet-measure/

    docker run konupek/eet-measure

Alternativně je možné použít přímo zdrojové kódy uvedené zde

    git clone git@github.com:konupek/eet-measure.git
    cd eet-measure/
    npm install
    npm run

## Popis ##
Tento nástroj slouží k měření odezvy serverů EET. Funguje tak, že opakovaně posílá HTTP požadavky na jeden z endpointů API

## Dobrovolný příspěvek a rozvoj projektu ##
Budu rád, pokud k projektu přispějete formou programátorské pomoci, nebo drobného BitCoinu.

![alt text](https://github.com/konupek/eet-measure/raw/master/qr.png "QR")
![alt text](https://github.com/konupek/eet-measure/raw/master/bc.jpg "QR")
