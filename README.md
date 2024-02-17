# chat_web_socket
proyecto de chat en tiempo real utilizando node.js express y sql, como tambien la parte del fron-end

## morgan
Se utiliza para mostrar los logs de las solicitudes HTTP que se reciben en el servidor.

npm i norman -E (el flack es para que instale la versio exacta)


## web socket

utilizaremos socket.io ya que se adapta mas a nodejs para hacer que nuestra aplicacion se pueda conectar con el servidor y viceversa constantemente

se deve de importar primero el socket con..
-> import { Server } from 'socket.io'

y posterior 
-> import {createServer} from 'node:http'

esto con el fin que el servidor de express se conecte correctamente con el servidor de socket.io y este tenga todas los metodos

## codigo de eslint

./node_modules/.bin/eslint --init