import { Head } from "#build/components";
import { ScriptCompileContext } from "vue/compiler-sfc";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
css :[ 'bootstrap/dist/css/bootstrap.min.css' ],

 app :{

  head:{
     Script:[
      { src :"https://cdn.jsdelivr.net/npm/@popperjs/s/core@2.11.8/dist/umd/popper.min.js"}
    ]
    
   }
 }
  })

