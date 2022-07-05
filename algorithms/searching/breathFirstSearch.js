const breathFirstSearch = (root) => {
    console.log(root)
    if (!root) {
        return null;
    }
    let currentNode = root;
    const queue = [];
    const list = [];
    queue.push(currentNode);
    while (queue.length) {
        currentNode = queue.shift;
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return list;
}

module.exports = {
    breathFirstSearch
}