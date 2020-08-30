﻿using FundAggregator.Portfolio.Contracts.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace FundAggregator.Portfolio.Contracts.Commands
{
    public class UpdatePortfolio
    {
        public Guid PortfolioId { get; set; }
        public List<Investment> NewInvestmenets { get; set; }
    }
}