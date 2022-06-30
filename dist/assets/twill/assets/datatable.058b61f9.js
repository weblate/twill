import{e as d,g as f,c as i,N as u}from"./form.af977733.js";import{r as S}from"./pushState.5b409387.js";import{D as o}from"./language.bdacb39e.js";const A="DATATABLE";var T={get(e,t){d.get(window.TWILL.CMS_URLS.index,{params:e}).then(function(a){if(a.data.replaceUrl){const r=a.request.responseURL;S(r)}if(t&&typeof t=="function"){const r={data:a.data.tableData?a.data.tableData:[],nav:a.data.tableMainFilters?a.data.tableMainFilters:[],maxPage:a.data.maxPage?a.data.maxPage:1};t(r)}},function(a){f(A,{message:"Get request error.",value:a})})},togglePublished(e,t,a){d.put(window.TWILL.CMS_URLS.publish,{id:e.id,active:e.published}).then(function(r){t&&typeof t=="function"&&t(r)},function(r){f(A,{message:"Publish request error.",value:r}),a&&typeof a=="function"&&a(r.response)})},toggleFeatured(e,t){console.log(window.TWILL.CMS_URLS.feature),d.put(window.TWILL.CMS_URLS.feature,{id:e.id,active:e.featured}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Feature request error.",value:a})})},delete(e,t){d.delete(e.delete).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Delete request error.",value:a})})},restore(e,t){d.put(window.TWILL.CMS_URLS.restore,{id:e.id}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Restore request error.",value:a})})},destroy(e,t){d.put(window.TWILL.CMS_URLS.forceDelete,{id:e.id}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Destroy request error.",value:a})})},duplicate(e,t){d.put(e.duplicate).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Duplicate request error.",value:a})})},reorder(e,t){d.post(window.TWILL.CMS_URLS.reorder,{ids:e}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Reorder request error.",value:a})})},bulkPublish(e,t){d.post(window.TWILL.CMS_URLS.bulkPublish,{ids:e.ids,publish:e.toPublish}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Bulk publish request error.",value:a})})},bulkFeature(e,t){d.post(window.TWILL.CMS_URLS.bulkFeature,{ids:e.ids,feature:e.toFeature}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Bulk feature request error.",value:a})})},bulkDelete(e,t){d.post(window.TWILL.CMS_URLS.bulkDelete,{ids:e}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Bulk delete request error.",value:a})})},bulkRestore(e,t){d.post(window.TWILL.CMS_URLS.bulkRestore,{ids:e}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Bulk restore request error.",value:a})})},bulkDestroy(e,t){d.post(window.TWILL.CMS_URLS.bulkForceDelete,{ids:e}).then(function(a){t&&typeof t=="function"&&t(a)},function(a){f(A,{message:"Bulk destroy request error.",value:a})})}};function c(){const e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}function L(e,t){const a="";c()?localStorage.setItem(e,t):document.cookie=e+"="+t+a+"; path=/"}function R(e){if(c())return localStorage.getItem(e);{const t=e+"=",a=document.cookie.split(";");for(let r=0;r<a.length;r++){let n=a[r];for(;n.charAt(0)===" ";)n=n.substring(1,n.length);if(n.indexOf(t)===0)return n.substring(t.length,n.length)}return null}}const g=(e,t,a)=>{e.forEach(r=>{r.id===t&&a(r),r.children&&g(r.children,t,a)})},_=(e,t=["id","children"],a="children")=>{const r=JSON.parse(JSON.stringify(e));return r.forEach(n=>{for(const l in n)t.includes(l)||delete n[l],l===a&&(n[l]=_(n[l]))}),r},m={baseUrl:window.TWILL.STORE.datatable.baseUrl||"",data:window.TWILL.STORE.datatable.data||[],columns:window.TWILL.STORE.datatable.columns||[],filter:window.TWILL.STORE.datatable.filter||{},filtersNav:window.TWILL.STORE.datatable.navigation||[],page:Number(window.TWILL.STORE.datatable.page||1),maxPage:Number(window.TWILL.STORE.datatable.maxPage||1),defaultMaxPage:Number(window.TWILL.STORE.datatable.defaultMaxPage||1),offset:Number(window.TWILL.STORE.datatable.offset||60),defaultOffset:Number(window.TWILL.STORE.datatable.defaultOffset||60),sortKey:window.TWILL.STORE.datatable.sortKey||"",sortDir:window.TWILL.STORE.datatable.sortDir||"asc",bulk:[],localStorageKey:window.TWILL.STORE.datatable.localStorageKey||window.location.pathname,loading:!1,updateTracker:0},v={dataIds:e=>e.data.map(t=>t.id),hideableColumns:e=>e.columns.filter(t=>t.optional),visibleColumns:e=>e.columns.filter(t=>t.visible),visibleColumnsNames:e=>{const t=[];return e.columns.length&&e.columns.forEach(function(a){a.visible&&t.push(a.name)}),t}},I={[o.UPDATE_DATATABLE_DATA](e,t){e.bulk=[],e.data=t},[o.UPDATE_DATATABLE_BULK](e,t){e.bulk.indexOf(t)>-1?e.bulk=e.bulk.filter(function(a){return a!==t}):e.bulk.push(t)},[o.REPLACE_DATATABLE_BULK](e,t){e.bulk=t},[o.ADD_DATATABLE_COLUMN](e,t){e.columns.splice(t.index,0,t.data)},[o.REMOVE_DATATABLE_COLUMN](e,t){e.columns.forEach(function(a,r){a.name===t&&e.columns.splice(r,1)})},[o.UPDATE_DATATABLE_FILTER](e,t){e.filter=Object.assign({},e.filter,t)},[o.CLEAR_DATATABLE_FILTER](e){e.filter=Object.assign({},{search:"",status:e.filter.status})},[o.UPDATE_DATATABLE_FILTER_STATUS](e,t){e.filter.status=t},[o.UPDATE_DATATABLE_OFFSET](e,t){e.offset=t,L(e.localStorageKey+"_page-offset",e.offset)},[o.UPDATE_DATATABLE_PAGE](e,t){e.page=t},[o.UPDATE_DATATABLE_MAXPAGE](e,t){e.page>t&&(e.page=t),e.maxPage=t},[o.UPDATE_DATATABLE_VISIBLITY](e,t){L(e.localStorageKey+"_columns-visible",JSON.stringify(t)),e.columns.forEach(function(a){for(let r=0;r<t.length;r++){if(t[r]===a.name){a.visible=!0;break}a.visible=!1}})},[o.UPDATE_DATATABLE_SORT](e,t){const a="asc";e.sortKey===t.name?e.sortDir=e.sortDir===a?"desc":a:e.sortDir=a,e.sortKey=t.name},[o.UPDATE_DATATABLE_NAV](e,t){t.forEach(function(a){e.filtersNav.forEach(function(r){r.name===a.name&&(r.number=a.number)})})},[o.PUBLISH_DATATABLE](e,t){const a=t.id,r=t.value;function n(s){s>=0&&(r==="toggle"?e.data[s].published=!e.data[s].published:e.data[s].published=r)}function l(s){return e.data.findIndex(function(E,D){return E.id===s})}if(Array.isArray(a))a.forEach(function(s){const E=l(s);n(E)}),e.bulk=[];else{const s=l(a);n(s)}},[o.FEATURE_DATATABLE](e,t){const a=t.id,r=t.value;function n(s){s>=0&&(r==="toggle"?e.data[s].featured=!e.data[s].featured:e.data[s].featured=r)}function l(s){return e.data.findIndex(function(E,D){return E.id===s})}if(Array.isArray(a))a.forEach(function(s){const E=l(s);n(E)}),e.bulk=[];else{const s=l(a);n(s)}},[o.UPDATE_DATATABLE_LOADING](e,t){e.loading=!e.loading},[o.UPDATE_DATATABLE_NESTED](e,t){g(e.data,t.parentId,a=>{a.children=t.val})},[o.UPDATE_DATATABLE_TRACKER](e,t){e.updateTracker=t?e.updateTracker+1:0}},h={[i.GET_DATATABLE]({commit:e,state:t,getters:a}){if(!t.loading){e(o.UPDATE_DATATABLE_LOADING,!0);const r={sortKey:t.sortKey,sortDir:t.sortDir,page:t.page,offset:t.offset,columns:a.visibleColumnsNames,filter:t.filter};T.get(r,function(n){e(o.UPDATE_DATATABLE_DATA,n.data),e(o.UPDATE_DATATABLE_MAXPAGE,n.maxPage),e(o.UPDATE_DATATABLE_NAV,n.nav),e(o.UPDATE_DATATABLE_LOADING,!1)})}},[i.SET_DATATABLE_NESTED]({commit:e,state:t,dispatch:a}){const r=_(t.data);T.reorder(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant})})},[i.SET_DATATABLE]({commit:e,state:t,dispatch:a}){const r=t.data.map(n=>n.id);T.reorder(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant})})},[i.TOGGLE_PUBLISH]({commit:e,state:t,dispatch:a},r){T.togglePublished(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),a(i.GET_DATATABLE)},function(n){e(u.SET_NOTIF,{message:n.data.error.message,variant:"error"})})},[i.DELETE_ROW]({commit:e,state:t,dispatch:a},r){T.delete(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),a(i.GET_DATATABLE)})},[i.DUPLICATE_ROW]({commit:e,state:t,dispatch:a},r){T.duplicate(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),n.data.hasOwnProperty("redirect")&&window.location.replace(n.data.redirect)})},[i.RESTORE_ROW]({commit:e,state:t,dispatch:a},r){T.restore(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),a(i.GET_DATATABLE)})},[i.DESTROY_ROW]({commit:e,state:t,dispatch:a},r){T.destroy(r,function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),a(i.GET_DATATABLE)})},[i.BULK_PUBLISH]({commit:e,state:t,dispatch:a},r){T.bulkPublish({ids:t.bulk.join(),toPublish:r.toPublish},function(n){e(u.SET_NOTIF,{message:n.data.message,variant:n.data.variant}),a(i.GET_DATATABLE)})},[i.TOGGLE_FEATURE]({commit:e,state:t},a){T.toggleFeatured(a,r=>{e(o.FEATURE_DATATABLE,{id:a.id,value:"toggle"}),e(u.SET_NOTIF,{message:r.data.message,variant:r.data.variant})})},[i.BULK_FEATURE]({commit:e,state:t},a){T.bulkFeature({ids:t.bulk.join(),toFeature:a.toFeature},function(r){e(o.FEATURE_DATATABLE,{id:t.bulk,value:!0}),e(u.SET_NOTIF,{message:r.data.message,variant:r.data.variant})})},[i.BULK_DELETE]({commit:e,state:t,dispatch:a}){T.bulkDelete(t.bulk.join(),function(r){e(u.SET_NOTIF,{message:r.data.message,variant:r.data.variant}),a(i.GET_DATATABLE)})},[i.BULK_RESTORE]({commit:e,state:t,dispatch:a}){T.bulkRestore(t.bulk.join(),function(r){e(u.SET_NOTIF,{message:r.data.message,variant:r.data.variant}),a(i.GET_DATATABLE)})},[i.BULK_DESTROY]({commit:e,state:t,dispatch:a}){T.bulkDestroy(t.bulk.join(),function(r){e(u.SET_NOTIF,{message:r.data.message,variant:r.data.variant}),a(i.GET_DATATABLE)})}};var B={state:m,getters:v,actions:h,mutations:I};export{B as d,R as g};
