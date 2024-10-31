class Resizer {
    constructor({resizerRef, portalRef, fitView, checkFullScreen, elementForCalculatingMaximumHeight, resizerChangeFullScreenCallback}) {
        this.checkFullScreen = checkFullScreen;
        this.resizerRef = resizerRef;
        this.portalRef = portalRef;
        this.fitView = fitView;
        this.draggedClass = 'resizer-dragged';
        this.localeStorageName = 'resizer-height';
        this.elementForCalculatingMaximumHeight = elementForCalculatingMaximumHeight;
        resizerRef.onmousedown = this.mouseDown.bind(this);
        document.onmouseup = this.mouseUp.bind(this);

        resizerChangeFullScreenCallback.current = isFullScreen => this.setHeight();
        this.setHeight();
    }

    setHeight() {
        let height = '240px';
        if(this.checkFullScreen()) {
            if(this.elementForCalculatingMaximumHeight) {
                height =
                    document.querySelector(this.elementForCalculatingMaximumHeight.selector).getBoundingClientRect().height -
                    this.elementForCalculatingMaximumHeight.padding + 'px';
            }
        } else {
            const h = localStorage.getItem(this.localeStorageName);
            if(h) height = `${h}px`;
        }
        if(height !== this.height) {
            this.portalRef.style.height = height;
            this.height = height;
            setTimeout(() => {
                this.fitView('setHeight');
            }, 100);
        }
    }

    mouseDown() {
        this.initialPortalHeight = this.portalRef.getBoundingClientRect().height - 16;
        this.initialResizerTop = this.resizerRef.getBoundingClientRect().top;
        this.resizerRef.classList.add(this.draggedClass);
        document.onmousemove = this.mouseMove.bind(this);
    }
    
    mouseUp() {
        if(!document.onmousemove) return;
        this.resizerRef.classList.remove(this.draggedClass);
        document.onmousemove = null;
        this.fitView('mouseUp');
    }

    mouseMove(e) {
        const delta = e.clientY - this.initialResizerTop;
        const height = this.initialPortalHeight + delta;
        this.portalRef.style.height = `${height}px`;
        localStorage.setItem(this.localeStorageName, height);
        this.height = height;
    }
}

export default Resizer;
