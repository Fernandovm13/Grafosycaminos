export default class Graph {
    #matrizAdyacencia = [];
    #map = new Map();

    constructor() {}

    addVertices(...vertices) {
        for (let value of vertices) {
            this.#matrizAdyacencia.push([]);
            this.#map.set(value, this.#matrizAdyacencia.length - 1);
        }
    }

    addV(value) {
        this.#matrizAdyacencia.push([]);
        this.#map.set(value, this.#matrizAdyacencia.length - 1);
    }

    addConexion(start, end, weight = 1) {
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#matrizAdyacencia[this.#map.get(start)][this.#map.get(end)] = weight;
            return true;
        }
        return false;
    }

    bfs(callback) {
        let queue = [];
        let list = [];
        const entries = [...this.#map.entries()];
        for (let i = 0; i < this.#matrizAdyacencia.length; i++)
            list[i] = false;

        let [key] = entries[0];
        queue.push(key);

        while (queue.length > 0) {
            let val = queue.shift(); // Sacamos el primer elemento de la cola
            callback(val); // Imprimimos el valor
            list[this.#map.get(val)] = true; // Marcamos de visitado
            for (let i = 0; i < this.#matrizAdyacencia[this.#map.get(val)].length; i++) {
                if (this.#matrizAdyacencia[this.#map.get(val)][i]) {
                    let [key] = entries[i];
                    if (!list[this.#map.get(key)] && !queue.includes(key))
                        queue.push(key); // Agregamos los vecinos a la cola
                }
            }
        }
    }

    dfs(start, callback, visited = new Set()) {
        visited.add(start);
        callback(start);
        const startIdx = this.#map.get(start);
        for (let i = 0; i < this.#matrizAdyacencia[startIdx].length; i++) {
            if (this.#matrizAdyacencia[startIdx][i]) {
                let neighbor = [...this.#map.keys()][i];
                if (!visited.has(neighbor)) {
                    this.dfs(neighbor, callback, visited);
                }
            }
        }
    }

    getVertices() {
        return [...this.#map.keys()];
    }
}
