function toggleAccordion(accordionHeader) {
    var accordionItem = accordionHeader.parentElement;
    var accordionContent = accordionHeader.nextElementSibling;

    accordionItem.classList.toggle("active");

    if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
    } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
}
