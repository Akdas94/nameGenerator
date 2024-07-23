// netlify/functions/api.js
import { noun, adj } from "../../data/random-data.js";

export async function handler(event) {
  if (event.httpMethod === "POST") {
    const randomAdj = adj[Math.floor(Math.random() * adj.length)];
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    return {
      statusCode: 200,
      body: JSON.stringify({
        adjective: randomAdj,
        noun: randomNoun,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else if (event.httpMethod === 'GET') {
    return {
        statusCode: 200,
        body: JSON.stringify({

        }),
        headers: {
            "Content-Type": "application/json",
        },
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
    headers: {
      "Content-Type": "application/json",
    },
  };
}
