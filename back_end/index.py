from flask import Flask, session, redirect, url_for, request
from markupsafe import escape

app = Flask(__name__)

app.secret_key = b'hjkvfs9s945dsadsa949g:,.add]'

@app.route('/')
def index():
    if 'username' in session:
        return "Logged in as %s" %escape(session['username'])
    return "you are not logged in!"

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        session['username'] = request.form.get('username')
        return redirect(url_for('index'))
    return  '''
            <form method="post">
                <p><input type=text name=username>
                <p><input type=submit value=Login>
            </form>
            '''

@app.route('/logout')
def logout():
    app.logger.warning('user trying to log out!!!')
    session.pop('username', None)
    return redirect(url_for("index"))