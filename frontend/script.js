
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
