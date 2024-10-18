<template>
    <input placeholder="Zəhmət olmasa bir şeylər yazın..." v-model="inp" @keydown.enter="add" />
    <button class="addBtn" >Add</button>
</template>