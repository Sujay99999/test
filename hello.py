from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
# for the main route which has the form
def index():
    return render_template('index.html')



@app.route('/test', methods=['GET',"POST"])

def test():
    if request.method == "POST":
       server_details = request.get_json()
       print(server_details)
       
    results = {'processed': 'true', "details":server_details}
    return jsonify(results)