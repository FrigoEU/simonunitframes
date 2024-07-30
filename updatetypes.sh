echo 'Pulling dkjson'
cd ./dkjson
git pull

echo 'Pulling BlizzardInterfaceCode'
cd ../BlizzardInterfaceCode
git pull

echo 'Generating wow.d.ts'
python gendefs > wow.d.ts
