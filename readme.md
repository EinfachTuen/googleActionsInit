1. run: npm install actions-on-google
2. run: ngrok.exe on the presetted nodejs port (currently 5000) (download it ngrok its not inside this project.
3. change: action.json "url": "https://572e66a2.ngrok.io/", to the ngrok address shown after step 2.)
4. create: Action SDK project on https://console.actions.google.com/
5. download gaction.exe and place in this folder (github don't like exe so much...)
6. change: gaction.bat "testapp-57102" to your project name
7. run: gaction.bat and follow the first auth dialog
8. kilck in your google action simulator on change version
9. run the bin/www on nodejs

if you use linux: run ngrok on linux with linux ways (check ngrok webpage). run gaction from terminal or shell script and you can probably not use the exe but some other file ( check google actions for that)

