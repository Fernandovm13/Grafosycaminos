export default class GraphView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    displayVertex(vertex, type = '') {
        const vertexElement = document.createElement('div');
        vertexElement.className = `vertex ${type}`;
        vertexElement.textContent = vertex;
        this.container.appendChild(vertexElement);
    }

    clear() {
        this.container.innerHTML = '';
    }

    displayMessage(message, type = 'info') {
        const messageContainer = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.className = `message ${type}`;
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
    }
}
