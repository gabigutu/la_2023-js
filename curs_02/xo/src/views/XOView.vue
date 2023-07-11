<script setup>
/* gabi.gutu@gmail.com */
import { reactive, computed } from 'vue';

let tabla = reactive([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]);
const valori = ['X', '0'];
let gameOver = false;
let indexMutare = 0;

function equalsRow(indexRow) {
    const linie = tabla[indexRow];
    const ref = linie[0];
    if (ref === '') return;
    for (let i = 1; i < linie.length; i++) {
        if (ref !== linie[i]) return false;
    }
    return true;
}
function equalsCol(indexCol) {
    const ref = tabla[0][indexCol];
    if (ref === '') return;
    for (let i = 1; i < tabla.length; i++) {
        if (ref !== tabla[i][indexCol]) return false;
    }
    return true;
}
function principala() {
    const ref = tabla[0][0];
    if (ref === '') return;
    for (let i = 1; i < tabla.length; i++) {
        if (ref !== tabla[i][i]) return false;
    }
    return true;
}
function secundara() {
    const ref = tabla[0][tabla.length - 1];
    if (ref === '') return;
    for (let i = 1; i < tabla.length; i++) {
        if (ref !== tabla[i][tabla.length - i - 1]) return false;
    }
    return true;
}

function endGame() {
    alert(valori[indexMutare] + ' a castigat!');
    gameOver = true;
}

function clickCell(row, col, cellId) {
    if (gameOver) return;
    console.log('Clicked cell [' + row + '][' + col + ']'); // [1][2]
    if (tabla[row][col] !== '') {
        // TODO: make it red
        return;
    }
    tabla[row][col] = valori[indexMutare];
    const cellElement = document.getElementById(cellId);
    cellElement.classList.add('animate__animated', 'animate__heartBeat');
    anime({
        targets: '#' + cellId,
        translateX: 15
    });
    if (
        equalsRow(row) ||
        equalsCol(col) ||
        (row === col && principala()) ||
        (col === tabla.length - row - 1 && secundara())
    ) {
        endGame();
    }
    indexMutare++;
    if (indexMutare >= valori.length) indexMutare = 0;
}
</script>

<template>
    <div>
        <h1>&lt; X &amp; 0 &gt; &copy; 2023</h1>

        <table>
            <tbody>
                <tr v-for="(row, indexRow) in tabla" v-bind:key="indexRow">
                    <!-- cell-1-2, cell-2-2 -->
                    <td v-bind:id="'cell-' + indexRow + '-' + indexCol" v-for="(cell, indexCol) in row" class="cell"
                        @click="clickCell(indexRow, indexCol, 'cell-' + indexRow + '-' + indexCol)" v-bind:key="indexCol">
                        <span v-if="cell != ''">{{ cell }}</span>
                        <span v-if="cell == ''">_</span>
                        <!-- <span v-else>_</span> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.cell {
    border: 1px solid black;
    padding: 1rem;
    font-size: 2rem;
    text-align: center;
    width: 33%;
    cursor: pointer;
}
</style>