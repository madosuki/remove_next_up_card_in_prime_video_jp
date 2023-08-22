const config = { attributes: true, childList: true, subtree: true };
const nextElementClassName = "atvwebplayersdk-nextupcard-wrapper";
const nextUpCardTitle = "atvwebplayersdk-nextupcard-title";

const callback = (mutationList) => {
    for (const { addedNodes } of mutationList) {
        for (const node of addedNodes) {
            if (!node.tagName) { continue; }
            const nextUpCardTitleElement = node.getElementsByClassName(nextUpCardTitle);
           if(nextUpCardTitleElement.length > 0) {
               nextUpCardTitleElement[0].parentNode.parentNode.parentNode.parentNode.remove();
           }
        }
    }
}

const observer = new MutationObserver(callback);
observer.observe(document.body, config);
// observer.disconnect();