polarity.export = PolarityComponent.extend({
    isExpanded: false,
    actions: {
        expand(){
            this.toggleProperty('isExpanded');
        }
    }
});
