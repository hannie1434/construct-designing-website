
document.getElementById("generateButton").addEventListener("click", function () {
    const sequence1 = document.getElementById("sequence1").value;
    const sequence2 = document.getElementById("sequence2").value;
    const sequence3 = document.getElementById("sequence3").value;
    const sequence4 = document.getElementById("sequence4").value;
    const kanprimer ='GCATTGAGCTAGTCAGTGAG'
    const afterBarcode ='TTAATTAAATGGCGATAGCTAGACTGGGCGGTTTTATGGACAGCAAGCGAACCGGAATTGCCAGCTGGGGCGCCCTCTGGTAAGGTTGGGAAGCCCTGCAAAGTAAACTGGATGGCTTTCTTGCCGCCAAGGATCTGATGGCGCAGGGGATCAAATCTGATCAAGAGACAGGATGAGGATCGTTTCGCATGATTGAACAAGATGGATTGCACGCAGGTTCTCCGGCCGCTTGGGTGGAGAGGCTATTCGGCTATGACTGGGCACAACAGACAATCGGCTGCTCTGATGCCGCCGTGTTCCGGCTGTCAGCGCAGGGGCGCCCGGTTCTTTTTGTCAAGACCGACCTGTCCGGTGCCCTGAATGAACTCCAAGACGAGGCAGCGCGGCTATCGTGGCTGGCCACGACGGGCGTTCCTTGCGCAGCTGTGCTCGACGTTGTCACTGAAGCGGGAAGGGACTGGCTGCTATTGGGCGAAGTGCCGGGGCAGGATCTCCTGTCATCTCACCTTGCTCCTGCCGAGAAAGTATCCATCATGGCTGATGCAATGCGGCGGCTGCATACGCTTGATCCGGCTACCTGCCCATTCGACCACCAAGCGAAACATCGCATCGAGCGAGCACGTACTCGGATGGAAGCCGGTCTTGTCGATCAGGATGATCTGGACGAAGAGCATCAGGGGCTCGCGCCAGCCGAACTGTTCGCCAGGCTCAAGGCGCGGATGCCCGACGGCGAGGATCTCGTCGTGACCCATGGCGATGCCTGCTTGCCGAATATCATGGTGGAAAATGGCCGCTTTTCTGGATTCATCGACTGTGGCCGGCTGGGTGTGGCGGACCGCTATCAGGACATAGCGTTGGCTACCCGTGATATTGCTGAAGAGCTTGGCGGCGAATGGGCTGACCGCTTCCTCGTGCTTTACGGTATCGCCGCTCCCGATTCGCAGCGCATCGCCTTCTATCGCCTTCTTGACGAGTTCTTCTGATTCAGACGGCATGCGGCCGC';

    // Concatenate all sequences together
    const concatenatedSequence = sequence1 + kanprimer+ sequence2 + afterBarcode + sequence3;

    // Create a Blob containing the concatenated sequence
    const blob = new Blob([concatenatedSequence], { type: "text/plain" });

    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${sequence4}.fasta`;

    // Append the anchor element to the DOM and trigger a click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up the anchor element and remove it from the DOM
    document.body.removeChild(downloadLink);

    alert("FASTA file generated and downloaded!");
});
document.getElementById("primerButton").addEventListener("click", function () {
    const sequence = document.getElementById("sequence").value;
    const primerLength = parseInt(document.getElementById("primerLength").value);
    const desiredTm = parseInt(document.getElementById("desiredTm").value);

    // Function to calculate the reverse complement of a DNA sequence
    function reverseComplement(sequence) {
        const complementMap = {
            A: 'T',
            T: 'A',
            G: 'C',
            C: 'G',
        };

        return sequence.split('').reverse().map(base => complementMap[base]).join('');
    }

    // Check if the input sequence is valid (contains only A, T, G, and C)
    const validSequence = /^[ATGC]+$/.test(sequence);

    if (!validSequence) {
        alert("Invalid DNA sequence. Please use only A, T, G, and C.");
        return;
    }

    const sequenceLength = sequence.length;

    // Calculate the midpoint of the sequence
    const midpoint = Math.floor(sequenceLength / 2);

    // Extract sequences for forward and reverse primers
    const forwardPrimer = sequence.slice(midpoint - primerLength / 2, midpoint + primerLength / 2);
    const reversePrimer = reverseComplement(forwardPrimer);

    // Display the generated primers
    document.getElementById("forwardPrimer").textContent = forwardPrimer;
    document.getElementById("reversePrimer").textContent = reversePrimer;
    document.getElementById("primerResults").style.display = "block";
});
