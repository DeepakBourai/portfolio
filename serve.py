"""
Lightweight local HTTP preview server for your portfolio.
Run:
    python serve.py
Then open http://localhost:3000 in your browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean terminal output
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format%args))

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("="*60)
        print(f"  ⚡ Portfolio is running locally at: http://localhost:{PORT}")
        print("  Press Ctrl+C to stop the preview server.")
        print("="*60)
        httpd.serve_forever()
