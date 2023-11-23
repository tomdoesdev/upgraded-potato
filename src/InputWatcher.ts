export class InputWatcher {
    /**
     *  @type {Record<string,boolean>}
     */
    keyHits = {}

    bind() {
        document.addEventListener("keydown",(ev)=>{
            this.keyHits[ev.code] = true;
        });
        document.addEventListener("keyup",(ev)=>{
            this.keyHits[ev.code] = false
        })
    }

    /**
     * @param  {string} key
     */
    isKeyPressed(key){
        return this.keyHits[key] === true;
    }
    
}