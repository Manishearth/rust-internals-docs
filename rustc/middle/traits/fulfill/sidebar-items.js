initSidebarItems({"struct":[["FulfilledPredicates",""],["FulfillmentContext","The fulfillment context is used to drive trait resolution.  It consists of a list of obligations that must be (eventually) satisfied. The job is to track which are satisfied, which yielded errors, and which are still pending. At any point, users can call `select_where_possible`, and the fulfilment context will try to do selection, retaining only those obligations that remain ambiguous. This may be helpful in pushing type inference along. Once all type inference constraints have been generated, the method `select_all_or_error` can be used to report any remaining ambiguous cases as errors."],["RegionObligation",""]]});