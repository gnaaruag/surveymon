function generateSegment() {
    const segmentContainer = document.getElementById('segmentContainer');
    

    // Create a question input
    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.placeholder = 'Enter your question';
    segmentContainer.appendChild(questionInput);

    // Create a radio button for "required" or "not required"
    const requiredRadio = document.createElement('input');
    requiredRadio.type = 'radio';
    requiredRadio.name = 'required';
    requiredRadio.value = 'required';
    requiredRadio.id = 'requiredRadio';
    segmentContainer.appendChild(requiredRadio);
    const requiredLabel = document.createElement('label');
    requiredLabel.textContent = 'Required';
    requiredLabel.htmlFor = 'requiredRadio';
    segmentContainer.appendChild(requiredLabel);

    const notRequiredRadio = document.createElement('input');
    notRequiredRadio.type = 'radio';
    notRequiredRadio.name = 'required';
    notRequiredRadio.value = 'notRequired';
    notRequiredRadio.id = 'notRequiredRadio';
    segmentContainer.appendChild(notRequiredRadio);
    const notRequiredLabel = document.createElement('label');
    notRequiredLabel.textContent = 'Not Required';
    notRequiredLabel.htmlFor = 'notRequiredRadio';
    segmentContainer.appendChild(notRequiredLabel);

    // Create text inputs for options
    for (let i = 1; i <= 4; i++) {
        const optionInput = document.createElement('input');
        optionInput.type = 'text';
        optionInput.placeholder = `Option ${i}`;
        segmentContainer.appendChild(optionInput);
    }
}