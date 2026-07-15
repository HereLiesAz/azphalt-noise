
export function register(runtime) {
    runtime.registerGenerator('noise', (canvas, params) => {
        const ctx = canvas.getContext('2d');
        let imgData = ctx.createImageData(canvas.width, canvas.height); for (let i = 0; i < imgData.data.length; i += 4) { let v = Math.random() * 255; imgData.data[i] = v; imgData.data[i+1] = v; imgData.data[i+2] = v; imgData.data[i+3] = 255; } ctx.putImageData(imgData, 0, 0);
    });
}
