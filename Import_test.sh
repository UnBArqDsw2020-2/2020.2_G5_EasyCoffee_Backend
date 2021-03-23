#!/bin/bash
echo "*********Case statement************"
echo "1 - Primeiro start no projeto"
echo "2 - Criar App sem dados"
echo "3 - excluir todos os dockers "
read num

case $num in
"1")
npm install

docker-compose up -d 

sleep 10s

docker cp ./test/ easy_db:/
 
docker exec -it easy_db mongoimport --jsonArray --db easydb --collection product \
          --authenticationDatabase admin --username admin --password admin \
          --drop --file ./test/prod_dados.json

docker exec -it easy_db mongoimport --jsonArray --db easydb --collection users \
          --authenticationDatabase admin --username admin --password admin \
          --drop --file ./test/user_dados.json
;;
"2")
npm install
docker-compose up -d 
;;
"3")
docker stop easy_backend easy_db express

docker rm easy_backend easy_db express
;;
*)
echo "Não compativel"
;;
esac
