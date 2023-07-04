<script setup>
import {reactive, computed} from 'vue';

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
    for (let i = 1; i < linie.length; i++) {
        if (ref !== linie[i]) return false;
    }
    return true;
}
function equalsCol(indexCol) {
    const ref = tabla[0][indexCol];
    for (let i = 1; i < tabla.length; i++) {
        if (ref !== tabla[i][indexCol]) return false;
    }
    return true;
}
function principala() {
    const ref=tabla[0][0];
    for (let i = 1; i < tabla.length; i++) {
        if (ref !== tabla[i][i]) return false;
    }
    return true;
}
function secundara() {
    const ref = tabla[0][tabla.length];
    for (let i = 1 ; i< tabla.length; i++) {
        if (ref !== tabla[i][tabla.length - i - 1]) return false;
    }
    return true;
}

function clickCell(row, col) {
    if (gameOver) return;
    console.log('Clicked cell [' + row + '][' + col + ']'); // [1][2]
    if (tabla[row][col] !== '') {
        // TODO: make it red
        return;
    }
    tabla[row][col] = valori[indexMutare];
    if (equalsRow(row) || equalsCol(col) || principala() || secundara()) {
        alert(valori[indexMutare] + ' a castigat!');
        gameOver = true;
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
                    <td v-for="(cell, indexCol) in row" class="cell" @click="clickCell(indexRow, indexCol)" v-bind:key="indexCol">
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