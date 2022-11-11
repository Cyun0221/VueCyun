const Playlist = {
    data() {
        return {
            playlist: ["what about now", "一千万个可能", "Me llamas"],
        };
    },
};

Vue.createApp(Playlist).mount("#app");