# Nástroj na měření odezvy EET serverů
*Jeednoduchý nástroj, naprogramovaný v Node.js pro měření odezvy serverů EET*

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

## Dobrovolný příspěvek ##
