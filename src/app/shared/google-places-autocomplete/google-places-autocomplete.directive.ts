import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';

@Directive({
  selector: '[appGooglePlacesAutocomplete]'
})
export class GooglePlacesAutocompleteDirective implements OnInit {

  @Output() placeSelected = new EventEmitter();

  constructor(private elementRef: ElementRef, private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.mapsAPILoader.load().then((data) => {
      console.log('data');
      console.log(data);
      const autocomplete = new google.maps.places.Autocomplete(this.elementRef.nativeElement, {types: ['geocode']});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {

        console.log('place changed');
        const place = autocomplete.getPlace();
        this.placeSelected.emit(place);
      });
    }, error => {
      console.log('error');
      console.log(error);
    });

  }

}
