function Heap() {
    // Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    heap_sort();

    enable_buttons();
}

function swap(i, j) {
    // swaps the sizes and updates the visuals
    div_update(divs[i], div_sizes[i], "red"); // Color update
    div_update(divs[j], div_sizes[j], "red"); // Color update

    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "red"); // Height update
    div_update(divs[j], div_sizes[j], "red"); // Height update

    div_update(divs[i], div_sizes[i], "blue"); // Color update
    div_update(divs[j], div_sizes[j], "blue"); // Color update
}

// (Add heap_sort, max_heapify, functions unchanged)
