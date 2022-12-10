import { Component, OnDestroy, OnInit } from '@angular/core';
import { Html5QrcodeScanner } from 'html5-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  scannedResult: any = '';
  ngOnInit(): void {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(
      this.onScanSuccess.bind(this),
      this.onScanFailure
    );
  }
  onScanSuccess(decodedText: any, decodedResult: any) {
    console.log(decodedText);
    this.scannedResult = decodedText;
    // handle the scanned code as you like, for example:
    // this.scannedResult = decodedResult;
    // console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  onScanFailure(error: any) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // console.warn(`Code scan error = ${error}`);
  }

  ngOnDestroy(): void {}
}
