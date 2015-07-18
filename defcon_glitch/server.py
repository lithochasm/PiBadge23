import socket
import SimpleHTTPServer
import SocketServer

PORT = 8000

class TCPServer(SocketServer.TCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.bind(self.server_address)

handler = SimpleHTTPServer.SimpleHTTPRequestHandler
httpd = TCPServer(('', PORT), handler)

try:
    print 'Listening on', PORT
    httpd.serve_forever()
except KeyboardInterrupt:
    print 'Bye.'
