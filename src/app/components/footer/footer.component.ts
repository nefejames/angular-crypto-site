import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerRoutes = [
    {
      linkHeading: 'Our Products',
      footerLinks: [
        'Wallet',
        'Investor Booster',
        'Referral Earn',
        'Venture Fund',
        'ETF Merger',
      ],
    },
    {
      linkHeading: 'Why choose Crypto?',
      footerLinks: [
        'Crypto vs. Coinbase',
        'How were different',
        'Our Philosophy',
        'Critical financial reviews',
        'What our customers say',
      ],
    },
    {
      linkHeading: 'Social',
      footerLinks: ['Twitter', 'Facebook', 'Instagram', 'Facebook'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
