import { AjaxInstance, AjaxRequestConfig } from 'uni-ajax'

// Vue3 (Options API)
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $ajax: AjaxInstance<AjaxRequestConfig>
  }
}