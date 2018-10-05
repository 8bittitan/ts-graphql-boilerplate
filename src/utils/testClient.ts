import fetch from 'node-fetch'

class TestClient {
  private url: string

  constructor(url: string) {
    this.url = url
  }

  public makeRequest(data: any, options): Promise<any> {
    return fetch(`${this.url}/graphql`, {
      ...options,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(response => response)
      .catch(err => {
        throw new Error(err)
      })
  }
}

export default new TestClient(process.env.TEST_URL)
