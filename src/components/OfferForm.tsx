
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const OfferForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    year: '',
    makeModel: '',
    condition: '',
    zip: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConditionChange = (value: string) => {
    setFormData(prev => ({ ...prev, condition: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate the form
    if (!formData.year || !formData.makeModel || !formData.condition || !formData.zip) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: t('form.success'),
      });
      setIsSubmitting(false);
      setFormData({
        year: '',
        makeModel: '',
        condition: '',
        zip: ''
      });
    }, 1500);
  };

  return (
    <section id="get-offer" className="section-container bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-primary p-6 text-center">
            <h2 className="text-3xl font-bold text-white">{t('form.title')}</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="year">{t('form.year_label')}</Label>
                  <Input
                    id="year"
                    name="year"
                    placeholder={t('form.year_placeholder')}
                    value={formData.year}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="makeModel">{t('form.make_label')}</Label>
                  <Input
                    id="makeModel"
                    name="makeModel"
                    placeholder={t('form.make_placeholder')}
                    value={formData.makeModel}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="condition">{t('form.condition_label')}</Label>
                  <Select onValueChange={handleConditionChange} value={formData.condition}>
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="running_drivable">{t('form.condition_opt1')}</SelectItem>
                      <SelectItem value="running_not_drivable">{t('form.condition_opt2')}</SelectItem>
                      <SelectItem value="not_running">{t('form.condition_opt3')}</SelectItem>
                      <SelectItem value="damaged">{t('form.condition_opt4')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zip">{t('form.zip_label')}</Label>
                  <Input
                    id="zip"
                    name="zip"
                    placeholder={t('form.zip_placeholder')}
                    value={formData.zip}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200"
                    maxLength={5}
                  />
                </div>
              </div>
              
              <div className="text-center text-sm text-gray-500 italic">
                {t('form.reassurance')}
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-vibrant-blue hover:bg-vibrant-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : t('form.submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OfferForm;
