const formatDuration = (seconds: number) => {
    const pad = (num: number) => (num < 10 ? "0" + num : num);
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    return `${hours > 0 ? pad(hours) + ":" : ""}${pad(minutes)}:${pad(secs)}`;
  };
  
  export default formatDuration;
  