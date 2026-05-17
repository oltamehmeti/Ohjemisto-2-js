from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

def hae_lentokentta(icao):
    conn = sqlite3.connect("flight.db")
    cursor = conn.cursor()

    cursor.execute("""
        SELECT ident, name, municipality
        FROM airport
        WHERE ident = ?
    """, (icao,))

    tulos = cursor.fetchone()
    conn.close()

    return tulos


@app.route("/kenttä/<icao>", methods=["GET"])
def kentta(icao):
    data = hae_lentokentta(icao.upper())

    if data:
        return jsonify({
            "ICAO": data[0],
            "Name": data[1],
            "Municipality": data[2]
        })
    else:
        return jsonify({"error": "Airport not found"}), 404


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000)