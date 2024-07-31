echo 'Pulling dkjson'
cd ./dkjson
git pull
cd ..

echo 'Pulling BlizzardInterfaceCode'
cd ./BlizzardInterfaceCode
git pull
cd ..

echo 'Generating wow.d.ts'
python gendefs > src/wow.d.ts
