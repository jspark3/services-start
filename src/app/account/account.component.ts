import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';
import { LoggingService } from '../logging.servis';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.updateSatatus(this.id, status)
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
