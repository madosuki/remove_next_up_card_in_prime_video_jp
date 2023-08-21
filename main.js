const config = { attributes: true, childList: true, subtree: true };
const nextElementClassName = "atvwebplayersdk-nextupcard-wrapper";

const callback = (mutationList) => {
    for (const { addedNodes } of mutationList) {
        for (const node of addedNodes) {
            if (!node.tagName) { continue; }
            const targetElementList = node.getElementsByClassName(nextElementClassName);
            if (node.classList.contains(nextElementClassName)) {
                node.remove();
            }
        }
    }
}

const observer = new MutationObserver(callback);
observer.observe(document.body, config);
// observer.disconnect();
