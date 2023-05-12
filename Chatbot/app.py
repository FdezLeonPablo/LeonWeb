from flask import Flask, request, jsonify
from chatgpt_assistant import generate_response

app = Flask(__name__)

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    prompt = data["prompt"]
    response = generate_response(prompt)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
