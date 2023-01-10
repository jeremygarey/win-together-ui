<template>
  <div class="flex justify-center items-center min-h-[40vh] bg-black/40">
    <div class="text-white text-xl font-light">
      <div class="container text-center">
        <slot name="text"></slot>
      </div>
    </div>
    <slot class="" name="image"></slot>
  </div>
</template>
