const Playlist = {
    data() {
        return {
            playlist: ["what about now", "一千万个可能", "Me llamas"],
            searchTerm: "",
        };
    },
    computed: {
        filteredPlaylist() {
            console.log(this.searchTerm);
            if (this.searchTerm) {
                return this.playlist.filter((song) => 
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                );
            } else {
                return this.playlist;
            }
        },
    },
};

Vue.createApp(Playlist).mount("#app");